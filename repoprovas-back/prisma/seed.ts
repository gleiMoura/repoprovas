import prisma from "../src/config/database.js";

const termsData = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
  ];
  
  const categoriesData = [
    {
      name: "Projeto",
    },
    {
      name: "Prática",
    },
    {
      name: "Recuperação",
    },
  ];
  
  const teachersData = [
    {
      name: "Diego Pinho",
    },
    {
      name: "Bruna Hamori",
    },
  ];
  
  const disciplinesData = [
    {
      name: "HTML e CSS",
      termId: 1,
    },
    {
      name: "Javascipt",
      termId: 2,
    },
    {
      name: "React",
      termId: 3,
    },
    {
      name: "Humildade",
      termId: 1,
    },
    {
      name: "Planejamento",
      termId: 2,
    },
    {
      name: "Autoconfiança",
      termId: 3,
    },
  ];
  
  const teachersDisciplinesData = [
    {
      teacherId: 1,
      disciplineId: 1,
    },
    {
      teacherId: 1,
      disciplineId: 2,
    },
    {
      teacherId: 1,
      disciplineId: 3,
    },
    {
      teacherId: 2,
      disciplineId: 4,
    },
    {
      teacherId: 2,
      disciplineId: 5,
    },
    {
      teacherId: 2,
      disciplineId: 6,
    },
  ];
  
  async function main() {
    await prisma.$connect();
    await prisma.terms.createMany({ data: termsData });
    await prisma.categories.createMany({ data: categoriesData });
    await prisma.teachers.createMany({ data: teachersData });
    await prisma.disciplines.createMany({ data: disciplinesData });
    await prisma.teachersDisciplines.createMany({ data: teachersDisciplinesData });
  }
  
  main()
    .catch((err) => {
      console.log(err)
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

