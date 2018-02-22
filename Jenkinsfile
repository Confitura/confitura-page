pipeline {
  agent {
    docker {
      image 'node:8'
    }
    
  }
  stages {
    stage('build') {
      steps {
        echo 'Building...'
        sh 'npm config set cache /tmp'
        sh 'npm install'
      }
    }
  }
}