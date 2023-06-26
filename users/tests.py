from django.test import TestCase
from django.contrib.auth import get_user_model
from django.test import Client


# Create your tests here.


class UserAccountTests(TestCase):
    db = get_user_model()

    def test_new_super_user(self):
        super_user = self.db.objects.create_superuser("spam@mugiraneza.com", "user_name", "first_name",
                                                      "last_name", "azerty123456")
        self.assertEqual(super_user.email, "spam@mugiraneza.com")
        self.assertEqual(super_user.user_name, "user_name")
        self.assertEqual(super_user.first_name, "first_name")
        self.assertEqual(super_user.last_name, "last_name")
        self.assertEqual(str(super_user), "user_name")
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_active)

        with self.assertRaises(ValueError):
            self.db.objects.create_superuser("spam@mugiraneza.com", "user_name", "first_name",
                                             "last_name", "azerty", is_superuser=False)
        with self.assertRaises(ValueError):
            self.db.objects.create_superuser("spam@mugiraneza.com", "user_name", "first_name",
                                             "last_name", "azerty123456", is_superuser=False)
        with self.assertRaises(ValueError):
            self.db.objects.create_superuser("spam@mugiraneza.com", "user_name", "first_name",
                                             "last_name", "azerty123456", is_staff=False)

    def test_new_user(self):
        user = self.db.objects.create_user("spam@mugiraneza.com", "user_name", "first_name", "last_name",
                                           "azerty123456")
        self.assertEqual(user.email, "spam@mugiraneza.com")
        self.assertEqual(user.user_name, "user_name")
        self.assertEqual(user.first_name, "first_name")
        self.assertEqual(user.last_name, "last_name")
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertTrue(user.is_active)

        with self.assertRaises(ValueError):
            self.db.objects.create_superuser("spam@mugiranezacom", "user_name", "first_name", "last_name",
                                             "azerty")
        with self.assertRaises(ValueError):
            self.db.objects.create_superuser("spam@mugiranezacom", "user_name", "first_name", "last_name",
                                             "azerty123456")
        with self.assertRaises(ValueError):
            self.db.objects.create_superuser(None, "user_name", "first_name", "last_name", "azerty123456")


class CustomUserViewTests(TestCase):
    client = Client()

    def test_custom_user_create(self):
        response = self.client.post("/api/user/register", {
            "user_name": "john",
            "password": "azerty123456",
            "email": "spam@mugiraneza.com",
            "first_name": "first_name",
            "last_name": "last_name"
        })
        self.assertEqual(response.status_code, 201)
        response = self.client.post("/api/user/register", {
            "user_name": "johny",
            "password": "smith",
            "email": "spam@mugiraneza.com",
            "first_name": "first_name",
            "last_name": "last_name"
        })
        self.assertEqual(response.status_code, 400)
        response = self.client.post("/api/user/register", {
            "user_name": "",
            "password": "smith",
            "email": "spam@mugiraneza.com",
            "first_name": "first_name",
            "last_name": "last_name"
        })
        self.assertEqual(response.status_code, 400)
        response = self.client.post("/api/user/register", {
            "user_name": "john",
            "password": "azerty123456",
            "email": "spam@mugiraneza.com",
            "first_name": "first_name",
            "last_name": "last_name"
        })
        self.assertEqual(response.status_code, 409)

    def test_custom_user_login(self):
        # cree un compte
        response = self.client.post("/api/user/register", {
            "user_name": "john",
            "password": "azerty123456",
            "email": "spam@mugiraneza.com",
            "first_name": "first_name",
            "last_name": "last_name"
        })
        self.assertEqual(response.status_code, 201)
        # ensuite on essaie de se connecté
        response = self.client.post("/api/token", {
            "password": "azerty123456",
            "email": "spam@mugiraneza.com"
        })
        self.assertEqual(response.status_code, 200)
        jwt = response.data["access"]

    # def test_custom_user_logout(self):
    #     # deconnexion
    #
    #     response = self.client.post("/api/token", {
    #         "Authorization": "JWT "+self.jwt
    #     })
    #     self.assertEqual(response.status_code, 200)
