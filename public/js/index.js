var numberOfDiseases;
var arrayDiseases;
typeof window;
var arrayMedForIllness;
var func;
var doc_id;

var firebaseConfig = {
    apiKey: "AIzaSyB6aXGH8XO_pj1fEYzcmSMLR02jP6DxVvI",
    authDomain: "vitals-b53aa.firebaseapp.com",
    databaseURL: "https://vitals-b53aa.firebaseio.com",
    projectId: "vitals-b53aa",
    storageBucket: "vitals-b53aa.appspot.com",
    messagingSenderId: "775903966240",
    appId: "1:775903966240:web:b87d37486bb9d4ad5bf845",
    measurementId: "G-XKDDLTXDL7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//db.settings({timestampsInSnapshots: true});

angular.module('NewApp', ['ngMaterial', 'ngMessages'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue');
  $mdThemingProvider.enableBrowserColor({
    theme: 'default', // Default is 'default'
    palette: 'accent', // Default is 'primary', any basic material palette and extended palettes are available
    hue: '200' // Default is '800'
  });
}).controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });

  };
})
.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
      });
  };
}).controller('ListCtrl', function($scope) {
  var imagePath1 = "https://firebasestorage.googleapis.com/v0/b/vitals-b53aa.appspot.com/o/resources%2Fpill.png?alt=media&token=2ac34509-7d2e-4794-85a6-6552eb788686";
  var imagePath2 = "https://firebasestorage.googleapis.com/v0/b/droplets-658f2.appspot.com/o/baseline_perm_identity_black_18dp.png?alt=media&token=29987f4a-b013-4a77-b4b8-c0b7807039e3";
  var imagePath3 = "https://firebasestorage.googleapis.com/v0/b/vitals-b53aa.appspot.com/o/resources%2Fheart-flash.png?alt=media&token=42f88727-9bd0-40b3-a4ee-37cb995558c0";
  var imagePath4 = "https://firebasestorage.googleapis.com/v0/b/droplets-658f2.appspot.com/o/outline_person_add_black_18dp.png?alt=media&token=b24ff23a-42e5-4528-8bb3-04237e3b4d49";
  var imagePath5 = "https://firebasestorage.googleapis.com/v0/b/vitals-b53aa.appspot.com/o/resources%2Fhospital-building.png?alt=media&token=0d793000-ca2d-4e67-ba3c-81a478ab6c4b";
  $scope.todos = [
    {
      face : imagePath1,
      title: 'Medical Solutions',
      description: 'Add medical solutions',
      href: 'home.html'
    },
    {
      face : imagePath3,
      title: 'Diseases',
      description: 'Add diseases',
      href: 'diseases.html'
    },
    {
      face : imagePath5,
      title: 'Health Clinic',
      description: 'Add health clinic',
      href: 'clinic.html'
    },
  ];

  const collection = db.collection('diseases_lists').get();
  
  //const snapshot1 = await firestore.collection('diseases_lists').get();
  

  db.collection("diseases_lists")
    .get()
    .then(function(querySnapshot) {
      let diseasesNames = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var status1 = document.getElementById("cloudSaveStatus");
            
            diseasesNames.push(doc.id);
           // doc.child('diseaseName');
            //Object.values(doc.data()).map((item));

            for(var i=0;i<=diseasesNames.length; i++){
            //console.log(diseasesNames[i]);
            
            }
        });
        //var status1 = document.getElementById("cloudSaveStatus");
        for(var i=1;i<=diseasesNames.length; i++){
         //var arrrr = diseasesNames;
         //status1.textContent = diseasesNames;
         
         $scope.diseases = [
          { name: diseasesNames[0]},
          { name: diseasesNames[1]},
          { name: diseasesNames[2]},
          { name: diseasesNames[3]},
          { name: diseasesNames[5]},
          { name: diseasesNames[6]},
          { name: diseasesNames[7]},
          { name: diseasesNames[8]},
          { name: diseasesNames[9]},
          { name: diseasesNames[10]},
          { name: diseasesNames[11]},
          { name: diseasesNames[12]},
          { name: diseasesNames[13]},
          { name: diseasesNames[14]},
          { name: diseasesNames[15]},
          { name: diseasesNames[16]},
          { name: diseasesNames[17]},
          { name: diseasesNames[18]},
          { name: diseasesNames[19]},
          { name: diseasesNames[20]},
          { name: diseasesNames[21]},
          { name: diseasesNames[22]},
          { name: diseasesNames[23]},
          { name: diseasesNames[24]},
          { name: diseasesNames[25]},
          { name: diseasesNames[26]},
          { name: diseasesNames[27]},
          { name: diseasesNames[28]},
          { name: diseasesNames[29]},
          { name: diseasesNames[30]},
        ];

        }
        
        
        
        //console.log("Current diseasesNames in CA: ", diseasesNames.join(", "));
        
        
        
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  $scope.selectedDiseases = [];
  $scope.printSelectedToppings = function myFunction() {
    numberOfDiseases = this.selectedDiseases.length;
    // If there is more than one topping, we add an 'and'
    // to be gramatically correct. If there are 3+ toppings
    // we also add an oxford comma.
    if (numberOfDiseases > 1) {
      var needsOxfordComma = numberOfDiseases > 2;
      var lastDiseasesConjunction = (needsOxfordComma ? ',' : ',') + ' ';
      var lastDiseases = lastDiseasesConjunction +
          this.selectedDiseases[this.selectedDiseases.length - 1];
      //return this.selectedDiseases.slice(0, -1).join(', ') + lastDiseases;
      arrayDiseases = this.selectedDiseases;
      var arr = this.selectedDiseases;
      arrayMedForIllness = this.selectedDiseases.join(', ');
      //return arr;
    }

    arrayDiseases = this.selectedDiseases;
    
    var arr = this.selectedDiseases;
    arrayMedForIllness = this.selectedDiseases.join(', ');
    //return arr;
    //return this.selectedDiseases.join(', ');
  };
  function newFunction(){
    //return this.selectedDiseases.join('');
  }
});

function uploadMedSolutions(){
  for (i=0;i<=arrayDiseases.length-1;i++){
    var db = firebase.firestore();
    var medName1 = document.getElementById("medName").value;
    var medDescription1 = document.getElementById("medDescription").value;
    //var medForIllness1 = document.getElementById("medForIllness").value;
    var medNameDoc = medName1.replace(/\s+/g, '');
    var status; 
    
    //const docRef = db.doc("diseases/"+arrayDiseases[i]+"/med_solutions_list/");
    const docRef1 = db.doc("med_solutions/"+medNameDoc);
    
    if(medName1 != "" && medDescription1 != "" && arrayMedForIllness != ""){
      db.collection('diseases').doc(arrayDiseases[i]).collection('med_solutions').add({
        medName: medName1+" ",
        medDescription: medDescription1+" ",
        medForIllness: arrayMedForIllness,
      })
      .then(function() {
        //console.log("Document written with ID: ", docRef.id);
        document.getElementById("cloudSaveStatus").innerText = "Successful ";
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

      docRef1.set({
        medName: medName1+" ",
        medDescription: medDescription1+" ",
        medForIllness: arrayMedForIllness,
      });
    }
    else {
      alert("All fields must not be empty.");
    }
  }
}

function uploadDiseases(){
    var db = firebase.firestore();
    var diseaseName1 = document.getElementById("diseaseName").value;
    var diseaseDesc1 = document.getElementById("diseaseDesc").value;
    //var medForIllness1 = document.getElementById("medForIllness").value;
    var diseaseNameDoc = diseaseName1.replace(/\s+/g, '');
    var status; 
    
    const docRef = db.doc("diseases/"+diseaseNameDoc+"/information/description");
    const docRef1 = db.doc("diseases_lists/"+diseaseNameDoc);
    
    if(diseaseName1 != "" && diseaseDesc1 != ""){
      docRef.set({
        diseaseName: diseaseName1+" ",
        diseaseDesc: diseaseDesc1+" "
      })
      .then(function() {
        console.log("Successful");
        document.getElementById("cloudSaveStatus").innerText = "Successful";
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      docRef1.set({
        diseaseName: diseaseName1+" ",
        diseaseDesc: diseaseDesc1+" ",
      });
    }
    else {
      alert("All fields must not be empty.");
    }
}

var state = document.getElementById("stateId");
var selected_state;

var city = document.getElementById("cityId");
var selected_city;

function getProvince(){
    selected_state = state.options[state.selectedIndex].value; 
    //alert(selected_state);
}
function getCity(){
  selected_city = city.options[city.selectedIndex].value;
  //alert(selected_state);
}
document.getElementById('stateId').addEventListener('change', getProvince);
document.getElementById('cityId').addEventListener('change', getCity);
function uploadClinic(){
  var db = firebase.firestore();
  var clinicName1 = document.getElementById("clinicName").value;
  var clinicAddress1 = document.getElementById("clinicAddress").value;
  var clinicPhoneNo1 = document.getElementById("clinicPhoneNo").value;
  var clinicBarangay1 = document.getElementById("clinicBarangay").value;
  //var medForIllness1 = document.getElementById("medForIllness").value;
  var clinicNameDoc = clinicName1.replace(/\s+/g, '');
  var barangayNameDoc = clinicBarangay1.replace(/\s+/g, '');
  //var status; 
   

  const docRef = db.doc("clinics/"+clinicNameDoc+"/information/description");
  const docRef1 = db.doc("clinics_lists/"+clinicNameDoc);
  const docRef2 = db.doc("barangay_lists/"+barangayNameDoc+selected_city+selected_state);

  if(clinicName1 != "" && clinicAddress1 != "" && clinicPhoneNo1 != "" && clinicBarangay1 != "" && selected_state != "" && selected_city != ""){
    docRef.set({
      clinicName: clinicName1+" ",
      clinicAddress: clinicAddress1+" ",
      clinicPhoneNo: clinicPhoneNo1+" ",
      clinicBarangay: clinicBarangay1 +" ",
      barangayProvince: selected_state +" ",
      barangayCity: selected_city +" "
    })
    .then(function() {
      console.log("Successful");
      document.getElementById("cloudSaveStatus").innerText = "Successful";
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    docRef1.set({
      clinicName: clinicName1+" ",
      clinicAddress: clinicAddress1+" ",
      clinicPhoneNo: clinicPhoneNo1+" ",
      clinicBarangay: clinicBarangay1 +" ",
      barangayProvince: selected_state +" ",
      barangayCity: selected_city +" "
    });
    docRef2.set({  
      barangayPhoneNo: clinicPhoneNo1+" ",
      barangayName: clinicBarangay1 +" ",
      barangayProvince: selected_state +" ",
      barangayCity: selected_city +" "
    });
  } else {
    alert("All fields must not be empty.");
  }
}

function loginAccount(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            document.getElementById("status").innerText = "Wrong Password";
        } else {
            document.getElementById("status").innerText = errorMessage;
        }
      });

      initApp();

}

function initApp(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

          if(email == "administrator@vitals.com"){
            try{
              document.getElementById("status").textContent = "Successfully logged in as administrator";
              setTimeout(function(){
                window.location.href = "https://vitals-b53aa.web.app/home.html";
             },3000);

              document.getElementById("btn_login").disabled = true;
          
              document.getElementById("btn_logout").disabled = false;
            }catch(err){
              console.log("Element: status, not found")
            }
            
            
           
          }

          // ...
        } else {
          // User is signed out.
          // ...
          document.getElementById("status").textContent = "Signed out";
        }
      });
}

window.onload = function() {
  try{
    initApp();
    
    document.getElementById("btn_logout").disabled = true;
  }catch(err){
    console.log("error initialize.");
  }
    
};

function logoutAccount(){
  firebase.auth().signOut().then(function() {
    document.getElementById("status").textContent = "Signed out";
    document.getElementById("btn_logout").disabled = true;
    
    document.getElementById("btn_login").disabled = false;
  }).catch(function(error) {
    // An error happened.
  });
}


function logoutAccountInHome(){
  firebase.auth().signOut().then(function() {
    //document.getElementById("status").textContent = "Signed out";
    //document.getElementById("btn_logout").disabled = true;
    setTimeout(function(){
      window.location.href = "https://vitals-b53aa.web.app/index.html";
   },3000);
    //document.getElementById("btn_login").disabled = false;
  }).catch(function(error) {
    // An error happened.
  });
}

