fetch("static/footer/abboutus.json")
.response(result => result.json())
.then(console.log(result))