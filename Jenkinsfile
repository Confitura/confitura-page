pipeline {
  agent {
    docker {
      image 'node:8'
    }
    
  }
  stages {
    stage('build') {
      steps {
        echo 'Building... ${JOB_NAME} JOB_NAME'
        sh 'yarn'
        sh 'yarn build --prod'
      }
    }
    stage('test') {
      agent {
        docker {
          image 'nginx:latest'
          args '-v ./dist:/usr/share/nginx/html:ro'
        }
        
      }
      steps {
        sh 'curl localhost:80'
      }
    }
  }
}