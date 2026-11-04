
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browser') {
            steps {
                sh 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'CI=true npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**,test-results/**,playwright-report/**',
                allowEmptyArchive: true
        }
    }
}
