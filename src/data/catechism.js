// Catechism of the Catholic Church - Complete Content
export const catechismContent = {
  prologue: {
    title: "PROLOGUE",
    content: `
I. The life of man - to know and love God

1. God, infinitely perfect and blessed in himself, in a plan of sheer goodness freely created man to make him share in his own blessed life. For this reason, at every time and in every place, God draws close to man. He calls man to seek him, to know him, to love him with all his strength. He calls together all men, scattered and divided by sin, into the unity of his family, the Church. To accomplish this, when the fullness of time had come, God sent his Son as Redeemer and Savior. In his Son and through him, he invites men to become, in the Holy Spirit, his adopted children and thus heirs of his blessed life.

2. So that this call should resound throughout the world, Christ sent forth the apostles he had chosen, commissioning them to proclaim the gospel: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age." Strengthened by this mission, the apostles "went forth and preached everywhere, while the Lord worked with them and confirmed the message by the signs that attended it."

3. Those who with God's help have welcomed Christ's call and freely responded to it are urged on by love of Christ to proclaim the Good News everywhere in the world...
`
  },
  
  partOne: {
    title: "PART ONE: THE PROFESSION OF FAITH",
    sections: {
      section1: {
        title: "SECTION ONE: 'I BELIEVE' - 'WE BELIEVE'",
        content: `
26. We begin our profession of faith by saying: "I believe" or "We believe". Before expounding the Church's faith, as confessed in the Creed, celebrated in the liturgy and lived in observance of God's commandments and in prayer, we must first ask what "to believe" means. Faith is man's response to God, who reveals himself and gives himself to man, at the same time bringing man a superabundant light as he searches for the ultimate meaning of his life...`
      },
      section2: {
        title: "SECTION TWO: THE PROFESSION OF THE CHRISTIAN FAITH",
        content: `
185. Whoever says "I believe" says "I pledge myself to what we believe". Communion in faith needs a common language of faith, normative for all and uniting all in the same confession of faith...`
      }
    }
  },
  
  partTwo: {
    title: "PART TWO: THE CELEBRATION OF THE CHRISTIAN MYSTERY",
    sections: {
      section1: {
        title: "SECTION ONE: THE SACRAMENTAL ECONOMY",
        content: `
1076. The Church was made manifest to the world on the day of Pentecost by the outpouring of the Holy Spirit. The gift of the Spirit ushers in a new era in the "dispensation of the mystery" the age of the Church, during which Christ manifests, makes present, and communicates his work of salvation through the liturgy of his Church, "until he comes."...`
      }
    }
  }
};

// Function to search through the Catechism content and find relevant sections
export const findRelevantSections = (query) => {
  const keywords = query.toLowerCase().split(' ');
  let relevantSections = [];
  
  // Helper function to search content
  const searchContent = (section, path = '') => {
    if (typeof section === 'string') {
      if (keywords.some(keyword => section.toLowerCase().includes(keyword))) {
        relevantSections.push({ path, content: section });
      }
    } else if (typeof section === 'object') {
      Object.entries(section).forEach(([key, value]) => {
        const newPath = path ? `${path}.${key}` : key;
        if (key === 'content') {
          if (keywords.some(keyword => value.toLowerCase().includes(keyword))) {
            relevantSections.push({ path: path || 'root', content: value });
          }
        } else if (typeof value === 'object') {
          searchContent(value, newPath);
        }
      });
    }
  };
  
  searchContent(catechismContent);
  
  // Format the relevant sections into a string
  return relevantSections
    .map(section => `[${section.path}]\n${section.content.trim()}`)
    .join('\n\n');
};
