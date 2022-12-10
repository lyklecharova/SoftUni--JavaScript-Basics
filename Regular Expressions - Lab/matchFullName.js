function matchFullName(input) {
    let text = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/mg
    let name = input.match(text);
    console.log(name.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)
//Ivan Ivanov Test Testov