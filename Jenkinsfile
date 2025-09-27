pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HariRagavanR/portfolio-site.git'
            }
        }
        stage('Build') {
            steps {
                echo "✅ Building Portfolio Site..."
            }
        }
        stage('Deploy') {
            steps {
                echo "🚀 Deploying Portfolio Site..."
            }
        }
    }
}
