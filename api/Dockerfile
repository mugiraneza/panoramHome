FROM python:20-alpine3.17
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
#RUN apt-get update && apt-get install --no-install-recommends -y curl build-essential
#RUN set -xe
#ENV PATH="/root/.local/bin:$PATH"
RUN mkdir /docker_api
WORKDIR /docker_api
COPY . /docker_api
RUN pip install -r requirements.txt
EXPOSE 8000
RUN chmod 755 ./runserver.sh
RUN chmod +x ./runserver.sh
ENTRYPOINT ["./runserver.sh"]
CMD [""]

