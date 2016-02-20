function appendDisplay(val){
  console.log("appending:"+val);
  var results = document.getElementById('calc-results');
  results.innerHTML=results.innerHTML + val;
}

function calculate(){
  console.log("evaluating equation");
  var data = document.getElementById('calc-results');
  data.innerHTML=eval(data.innerHTML);
}

function clear(val)
{
  document.getElementById('calc-results').value=val;
}

function isEmpty(){
  var email = document.getElementById('email').value;

  if(email.length==0)
  {
    alert("Please enter a valid e-mail address.");
    return true;
  }
  else {
    return false;
  }
}
