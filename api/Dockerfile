FROM python:3.9.2-slim-buster
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/

RUN chown 755 ./requirements.txt

RUN pip install --upgrade pip

RUN apt-get update \
    && apt-get -y install netcat gcc postgresql \
    && apt-get clean

RUN apt-get update \
    && apt-get install -y binutils libproj-dev gdal-bin python-gdal python3-gdal

RUN pip install -r requirements.txt --no-cache-dir


COPY . /code

#RUN chmod 755 ./runserver.sh
#RUN chmod +x ./runserver.sh
#ENTRYPOINT ["./runserver.sh"]
