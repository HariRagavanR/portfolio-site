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
        stage('Deploy Container') {
            steps {
                sh '''
                  # Remove old container if running
                  docker rm -f portfolio || true
                  
                  # Run latest container on port 80
                  docker run -d --name portfolio -p 80:80 hariragavanr/portfolio-site:latest
                '''
            }
        }
    }
}
