const questions =[
   {'que': 'Which of the following is a markup language?',
   'a': 'HTML',
   'b' : 'CSS',
   'c' : 'JavaScript',
   'd' : 'PHP',
   'correct' : 'a'
   } ,
   {'que': 'The term for the processor that executes mathematical and logical operations is-',
   'a': 'Control',
   'b' : 'ALU',
   'c' : 'Register',
   'd' : 'Cache',
   'correct' : 'b'
   } ,
   {'que': 'Which mainframe computer was the first?',
   'a': 'UNIVAC',
   'b' : 'ACC',
   'c' : 'ENIAC',
   'd' : 'LINUX',
   'correct' : 'c'
   } ,
   {'que': 'A kilobyte, sometimes known as kB, is equal to:',
   'a': '1098 bytes',
   'b' : '1024 bytes',
   'c' : '256 bytes',
   'd' : '1000 bytes',
   'correct' : 'b'
   } ,
   {'que': 'What kind of network protocol is responsible for sending emails?',
   'a': 'HTTP',
   'b' : 'SMTP',
   'c' : 'DHCP',
   'd' : 'POP3',
   'correct' : 'b'
   } ,
   {'que': ' Binary digits are known by another name called:',
   'a': 'Bytes',
   'b' : 'Kilobytes',
   'c' : 'Decimal bytes',
   'd' : 'Bits',
   'correct' : 'd'
   } 
   
]



let index=0
let total =questions.length;
let right=0;
let wrong=0;

let quesbox = document.getElementById("quesbox");
let optionsinput = document.querySelectorAll('.options');

const loadques = ()=>{
    
    if(index === total)
    {
        return endquiz();
    }
   
    reset();
    
    const data =  questions[index];
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionsinput[0].nextElementSibling.innerText=data.a;
    optionsinput[1].nextElementSibling.innerText=data.b;
    optionsinput[2].nextElementSibling.innerText=data.c;
    optionsinput[3].nextElementSibling.innerText=data.d;
}



const submitquiz =()=>{
    const data =  questions[index];
    const ans = getans()
    console.log(ans , data.correct)
     if (ans == data.correct)
    {
        right++;
        console.log(right);
      }
     else{
       wrong++;
     }
    index++;
    loadques();
    return ;
}

const getans =()=>
{
    let answer;
    optionsinput.forEach(
        (input)=>{
        if(input.checked)
        {
            answer = input.value;
            
        }
    })
    console.log(answer)
    return answer;
}

const reset =()=>{
    optionsinput.forEach(
        (input)=>{
        input.checked=false;
    })

}

const endquiz=()=>
 {
    document.getElementById("box").innerHTML=`<h2>Thankyou for appearing in the quiz</h2>
    <h3> ${right} / ${correct} are correct </h3>`
    
 }

loadques();
