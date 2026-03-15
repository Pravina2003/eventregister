pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Pravina2003/eventreg.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Event Registration System'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Application'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment Successful'
            }
        }

    }
}
