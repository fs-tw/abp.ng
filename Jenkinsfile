pipeline {
	agent any
	stages {
		// stage('npm install') {
        //  	steps {
		// 		script {
		// 	  		try {
		// 		  		powershell '.\\ci\\npm-install.ps1'
		// 	  		} catch (Exception e) {
		// 		  	error "The npm install error!"
		// 	  		}
		// 		}
        //  	}
      	// }
      	// stage('ng build') {
        //  	steps {
		// 		script {
		// 	  		try {
		// 		  		powershell '.\\ci\\ng-build.ps1'
		// 	  		} catch (Exception e) {
		// 		  	error "The ng build error!"
		// 	  		}
		// 		}
        //  	}
      	// }
	  	stage('push angular/libs') {
         	steps {
				script {
			  		try {
				  		powershell '.\\ci\\push-angular-libs.ps1'
			  		} catch (Exception e) {
				  		error "The push angular/libs error!"
			  		}
				}
         	}
      	}
	}
}
