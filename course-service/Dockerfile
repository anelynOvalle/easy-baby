FROM openjdk
WORKDIR /app
EXPOSE 8090
COPY /target/course-service-0.0.1-SNAPSHOT.jar /app/course-service.jar
ENTRYPOINT ["java", "-jar", "course-service.jar"]