#!/usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 8080:8080' 
        }
    }
    stages {
        stage('Build') { 
            steps {
              script{
                  result =   sh (
                    script: "echo 1",

                )

                echo result

              }
            }
        }
    }
}
  
