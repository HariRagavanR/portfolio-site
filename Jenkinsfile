pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HariRagavanR/portfolio-site.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("hariragavanr/portfolio-site:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-creds', url: '' ]) {
                    script {
                        docker.image("hariragavanr/portfolio-site:latest").push()
                    }
                }
            }
        }
    }
}
