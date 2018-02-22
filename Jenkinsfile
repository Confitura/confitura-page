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
        sh 'export HOME=/tmp ; npm config set cache /tmp'
        sh 'export HOME=/tmp ;; npm install'
      }
    }
  }
}