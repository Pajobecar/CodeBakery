export interface Trainer {
  name: string;
  image?: string;
  description: string;
}

export const trainers: Trainer[] = [
  {
    name: 'John Smith',
    image: './assets/faces/face1.svg',
    description:
      "With over a decade of experience in web development, John is an expert in JavaScript and React. He's passionate about teaching and loves to share his knowledge with students.",
  },
  {
    name: 'Sarah Johnson',
    image: './assets/faces/face4.jpg',
    description:
      "Sarah is a full-stack developer with a focus on backend technologies. She's an expert in Python and databases, and enjoys helping students build scalable and robust web applications.",
  },
  {
    name: 'Mike Lee',
    image: './assets/faces/face2.svg',
    description:
      'Mike is a front-end developer with a keen eye for design. He specializes in HTML, CSS, and UX/UI design, and has a knack for creating beautiful and intuitive user interfaces.',
  },
  {
    name: 'Lisa Chen',
    image: './assets/faces/women5.jpg',
    description:
      "Lisa is a software engineer with a background in data science. She's skilled in Python and data analysis, and loves to help students discover the power of data-driven insights.",
  },
  {
    name: 'Jana Rodriguez',
    image: './assets/faces/face6.jpg',
    description:
      "Jana is a seasoned software engineer with experience in a wide range of technologies. She's an expert in C++, Java, and databases, and enjoys teaching how to build scalable systems.",
  },
];
