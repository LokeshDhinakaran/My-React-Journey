function customreact(reactelement,main){
   /* const dom = document.createElement(reactelement.type);
    dom.innerHTML = reactelement.content;
    dom.setAttribute('href',reactelement.props.href)
    dom.setAttribute('target',reactelement.props.target);
    main.appendChild(dom);
    */
   const dom = document.createElement(reactelement.type);
   dom.innerHTML = "Welcome to loki react";
   for(const prop in reactelement.props){
    if(prop == "content") continue;
    dom.setAttribute(prop,reactelement.props[prop]);
   }
   main.appendChild(dom);
}

const reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    content:'Click me to redirect'
}
const mainelement = document.querySelector("#root");

customreact(reactelement,mainelement)