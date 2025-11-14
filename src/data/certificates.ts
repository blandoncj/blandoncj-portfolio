export interface Certificate {
    title: string;
    image: string;
    issuer: string;
    url: string;
}

export const certificates: Certificate[] = [
    {
        title: "Git y GitHub",
        image: "/certificates/git-github.png",
        issuer: "Platzi",
        url: "https://platzi.com/p/blandev/curso/1557-git-github/diploma/detalle/"
    },
    {
        title: "Programación Funcional con Java SE",
        image: "/certificates/functional-java.png",
        issuer: "Platzi",
        url: "https://platzi.com/p/blandev/curso/1826-java-funcional/diploma/detalle/"
    },
    {
        title: "Fundamentos de Python",
        image: "/certificates/python-fundamentals.png",
        issuer: "Platzi",
        url: "https://platzi.com/p/blandev/curso/4227-python-fundamentos/diploma/detalle/"
    },
    {
        title: "Python: Entornos virtuales y pip",
        image: "/certificates/python-envs.png",
        issuer: "Platzi",
        url: "https://platzi.com/p/blandev/curso/4261-python-pip/diploma/detalle/"
    },
];

export const moreCertificatesUrl = "https://platzi.com/p/blandev/";

export default certificates;
