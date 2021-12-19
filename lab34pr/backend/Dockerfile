FROM python:3.8.6
WORKDIR /backend
COPY . .
RUN pip install -r requirements.txt
ENV APP_SETTINGS="config.DevelopmentConfig"
ENV DATABASE_URL="postgresql:///lab3"
CMD ["python","app.py"]