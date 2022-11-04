export const reposArr = [
  {
    id: 1,
    name: 'Sorting Hat',
    pinned: true,
    favorite: false,
    description: 'Sorting Hat Project',
    type: {
      js: true,
      html: true,
      css: true
    }
    // type: ['js', 'html', 'css']
  },
  {
    id: 2,
    name: 'Profile Page',
    pinned: false,
    favorite: true,
    description: 'Profile Page Project',
    type: {
      js: false,
      html: true,
      css: true
    }
    // type: ['html', 'css']
  }
];

export const projectsArr = [
  {
    id: 1,
    name: 'Pet Adoption',
    description: 'Pet Adoption Project',
    dateAdded: ''
  },
  {
    id: 2,
    name: 'Binary Converter',
    description: 'Binary Converter Project',
    dateAdded: ''
  }
];

export const packagesArr = [
  {
    id: 1,
    name: 'Apache Maven',
    description: 'A default package manager used for the Java programming language and the Java runtime environment.',
    icon: 'https://assets.stickpng.com/images/62a78ca8e42d729d928b174d.png',
    link: 'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry'
  },
  {
    id: 2,
    name: 'Docker',
    description: 'A software platform used for building applications based on containers — small and lightweight execution environments.',
    icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    link: 'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-docker-registry'
  }
];
