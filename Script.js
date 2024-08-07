let headr=document.getElementById("header");
let aboutus=document.getElementById("aboutus");
let abouttext1=document.getElementById("abtext1");
let abouttext2=document.getElementById("abtext2");
let abouttext3=document.getElementById("abtext3");
let ht1=document.getElementById("hometext1");
let home=document.getElementById("home");
let feature=document.getElementById("Feature");
let feature1=document.getElementById("fetid1");
let feature2=document.getElementById("fetid2");
let featureclass=document.querySelector("Featureclass");
let box=document.getElementById("search-id");


function aboutusdelete(){
    abouttext1.textContent="";
    abouttext2.textContent="";
    abouttext3.textContent="";
};
function Featuredelete(){
    feature1.textContent="";
    feature2.textContent="";
    feature1.style.borderColor="transparent";
    feature2.style.borderColor="transparent";
}


aboutus.addEventListener("click",function(){
    headr.textContent="About Us";
    headr.style.left="500px";
    abouttext1.style.position="relative";
    abouttext1.style.top="100px";
    abouttext2.style.position="relative";
    abouttext2.style.top="130px";
    abouttext3.style.position="relative";
    homedelete();
    abouttext3.style.top="160px";
    abouttext1.textContent="Welcome to ConnectEase, where our mission is to break down communication barriers and create a more connected world. We believe that effective communication is the key to fostering understanding, collaboration, and inclusivity in today’s diverse global community. Our innovative application offers a way to connect with people of different cultures and help them learn to grow in an environment which ensuring that everyone can communicate effortlessly, regardless of language or ability.";
    abouttext2.textContent="Our dedicated team of linguists, engineers, and accessibility experts work tirelessly to develop cutting-edge technology that makes communication seamless and accessible for all. We are committed to continually improving our services and adding new features to meet the evolving needs of our users. ";
    abouttext3.textContent="At ConnectEase, we strive to empower individuals by removing the obstacles that prevent meaningful interactions. Whether you’re connecting with people across the globe or in your local community, our application is here to make your communication experience smooth and inclusive. Thank you for choosing ConnectEase as your trusted partner in overcoming communication barriers.";
    Featuredelete();
    culturedelete();
});

feature.addEventListener("click",function(){
    headr.textContent="Features";
    headr.style.position="absolute";
    headr.style.top="10px";
    headr.style.left="500px";
    homedelete();
    feature1.style.borderColor="black";
    feature2.style.borderColor="black";
    feature1.textContent="Semantic Barrier";
    feature2.textContent="Cross Culture Barrier";
    aboutusdelete();
    culturedelete();
});

// Sementic Barrier
function performSearch() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        // URL encode the search query
        const encodedQuery = encodeURIComponent(query);
        // Create a Google search URL with the query
        const searchURL = `https://www.google.com/search?q=${encodedQuery}`;
        
        // Open the search results in a new tab
        window.open(searchURL, '_blank');
    } else {
        alert('Please enter a search term.');
    }
}

// Cross Culture Feature 
let par1=document.getElementById("par1");
let par2=document.getElementById("par2");
let par3=document.getElementById("par3");
let par4=document.getElementById("par4");
let par5=document.getElementById("par5");
let par6=document.getElementById("par6");

function culturedelete(){
    par1.textContent="";
    par2.textContent="";
    par3.textContent="";
    par4.textContent="";
    par5.textContent="";
    par6.textContent="";
};
feature2.addEventListener("click",function(){
    homedelete();
    Featuredelete();
    aboutusdelete();
    headr.textContent="Japanese Culture";
    headr.style.left="440px";
    par1.textContent="Culture: Saving face is crucial in Japanese society. The Japanese believe that turning down someone’s request causes embarrassment and loss of face to the other person. If a request cannot be agreed to, they will say, “it is inconvenient” or “it is under consideration";
    par2.textContent=" There is great emphasis on politeness, personal responsibility, and working together for the universal rather than the individual good. Facts that might be unpleasant are expressed in a gentle and indirect fashion. Since the Japanese strive for harmony and work well in groups, they often rely on facial expressions, tone of voice, and posture to understand others.";
    par3.textContent="Business relationships and communication: The Japanese prefer to do business on the basis of personal relationships. One way to build and maintain relationships is with greetings and seasonal cards. In general, being introduced or recommended by someone who already has a good relationship with the company is extremely helpful as it helps them know how to place others in a hierarchy relative to themselves.";
    par4.textContent="Business meeting etiquette: Greetings in Japan are very formal and ritualized. While for eigners are expected to shake hands, the traditional form of greeting is the bow. How far someone bows depends upon their relationship to the other person as well as the situation. The deeper someone bows, the more respect they show.Since this is a group society, foreigners should be prepared for group meetings. The most senior Japanese person will be seated farthest from the door, with the rest of the people seated in descending order of rank; the most junior person is seated closest to the door.";
    par5.textContent=" The Japanese often remain silent for long periods of time. Others should be patient and try to determine if their Japanese colleagues have understood what was said. Some Japanese people close their eyes when they want to listen intently.";
    par6.textContent="The Japanese seldom grant concessions. They expect both parties to come to the table with their best offer. Business cards are exchanged frequently and with great ceremony. Business cards are given and received with two hands and a slight bow.";
});

// Home Page
let ht2=document.getElementById("hometext2");
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let p4=document.getElementById("p4");
let p5=document.getElementById("p5");
function homedelete(){
    ht1.textContent="";
    ht2.textContent="";
    p1.textContent="";
    p2.textContent="";
    p3.textContent="";
    p4.textContent="";
    p5.textContent="";
};

home.addEventListener("click",function(){
    headr.textContent="Welcome to ConnectEase";
    headr.style.position="absolute";
    headr.style.top="10px";
    headr.style.left="400px";
    ht1.style.position="relative";
    ht1.style.top="100px";
    ht1.style.width="1100px";
    ht1.textContent="Breaking down communication barriers and creating a more connected world. Our innovative solutions help you communicate effortlessly, regardless of language or ability.";
    ht2.textContent="Certainly! Here are five important factors that affect communication and can act as barriers:";
    p1.textContent="1.Language Differences:- Varying languages or dialects can lead to misunderstandings and misinterpretations, creating significant obstacles to effective communication.";
    p2.textContent="2.Cultural Differences:- Different cultural backgrounds can result in diverse communication styles and non-verbal cues, leading to potential misinterpretations and misunderstandings.";
    p3.textContent="3.Technological Access:- Limited access to or familiarity with communication technologies can hinder effective communication, especially in remote or underdeveloped areas.";
    p4.textContent="4.Hearing and Speech Impairments:- Individuals with hearing or speech impairments may face challenges with conventional communication methods, necessitating alternative tools and approaches.";
    p5.textContent="5.Environmental Factors:- Physical noise and distractions in the environment can disrupt the clarity of communication, leading to misunderstandings and ineffective exchanges.";
    Featuredelete();
    culturedelete();
    aboutusdelete();
});

