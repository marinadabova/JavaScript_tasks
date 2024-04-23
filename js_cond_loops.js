//conditions
//if

if(condition1){
}else if(condition2){

} else{

}

//switch case
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }

//loops

/*
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
for(let i=0;i<6 ; i++){
}
*/

const blogPost=[
    {
        title: 'Hello smth',
        author: 'Marina',
        publishDate: '22 April',
        content: 'some content here'
    },
    {
        title: 'Hello smth else',
        author: 'Marina',
        publishDate: '3 April',
        content: 'some content here'
    }
]

for(let i=0; i<blogPost.length; i++){
    const postTitle=blogPost[i].title;
    const postAuthor= blogPost[i].author;
    //..
    console.log(postTitle);
    console.log(postAuthor);
    //...
}
