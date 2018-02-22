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
        sh 'yarn'
        sh 'yarn build --prod'
      }
    }
  }
}