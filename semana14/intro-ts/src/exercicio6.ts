enum ANOS {
    PREHISTORIA = "Pré-História",
    ANTIGA = "Idade Antiga",
    MEDIA = "Idade Média",
    MODERNA = "Idade Moderna",
    CONTEMPORANEA = "Idade Contemporânea",
}

type anoHistoria = (ano: number, sigla?: string) => string;

const divisaoHistoria : anoHistoria = (ano, sigla) => {
    

}