 // Récupération des éléments du DOM pour les formulaires du Bénévolat
 var inscription = document.querySelector(".Inscription"); //
 var courses = document.querySelector(".course");
 var don = document.querySelector(".bien");
 var tache = document.querySelector(".clean"); //

 var form = document.querySelector(".formu");
 var form1 = document.querySelector(".formu1");
 var form2 = document.querySelector(".formu2");
 var form3 = document.querySelector(".formu3");

 var inscrit= document.querySelector(".button"); //
 var inscrit1= document.querySelector(".button1"); //
 var inscrit2= document.querySelector(".button2"); //
 var inscrit3= document.querySelector(".button3"); //

 //Ajout des évènements concernant le formulaire du bénévolat
inscription.addEventListener('click',function(){form.style.display='block';});//Faire apparaitre le formulaire
courses.addEventListener('click',function(){form1.style.display='block';});//Faire apparaitre le formulaire
tache.addEventListener('click',function(){form2.style.display='block';});//Faire apparaitre le formulaire
don.addEventListener('click',function(){form3.style.display='block';});//Faire apparaitre le formulaire


// Faire disparaitre le formulaire
inscrit.addEventListener('click',function(){form.style.display='none';});//formulaire
inscrit1.addEventListener('click',function(){form1.style.display='none';});//formulaire
inscrit2.addEventListener('click',function(){form2.style.display='none';});//formulaire
inscrit3.addEventListener('click',function(){form3.style.display='none';});//formulaire
