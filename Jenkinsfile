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
                sh 'docker build -t hariragavanr/portfolio-site:latest .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-creds', url: '' ]) {
                    sh 'docker push hariragavanr/portfolio-site:latest'
                }
            }
        }
    }
}
