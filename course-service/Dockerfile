FROM openjdk

WORKDIR /app

EXPOSE 8091

COPY /target/maternity-service-0.0.1-SNAPSHOT.jar /app/maternity-service.jar

ENTRYPOINT ["java", "-jar", "maternity-service.jar"]