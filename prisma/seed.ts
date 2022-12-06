import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const criarDados = async() =>{
    const categoria = await prisma.categoria.create(
        {
            data:{
                nome: "Suspense"
            }
        }
    );

    const autor = await prisma.autor.create({
        data:{
            nome: "Machado Assis",
            email: "machado.assis@editora.com"
        }
    });

    await prisma.livro.create({
        data:{
            titulo: "Memórias póstumas de Brás Cubas",
            paginas: 199,
            unidade: 15,
            preco: 39.90,
            categoriaId: categoria.id,
            autorId: autor.id

        }
    });
}

criarDados();