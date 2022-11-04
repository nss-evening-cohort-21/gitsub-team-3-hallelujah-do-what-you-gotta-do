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
    icon: 'https://seeklogo.com/images/A/apache-logo-89257496F9-seeklogo.com.png',
    link: 'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry'
  },
  {
    id: 2,
    name: 'Docker',
    description: 'A software platform used for building applications based on containers — small and lightweight execution environments.',
    icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    link: 'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-docker-registry'
  },
  {
    id: 3,
    name: 'NuGet',
    description: 'A free and open source package manager used for the Microsoft development platforms including .NET.',
    icon: 'https://www.nuget.org/Content/gallery/img/logo-og-600x600.png',
    link: 'https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages'
  }, 
  {
    id: 4,
    name: 'npm',
    description: 'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.',
    icon: 'https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png',
    link: 'https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages',
  },
  {
    id: 5,
    name: 'RubyGems',
    description: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
    icon: './media/rubygems.png',
    link: 'https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages',
  }
];
