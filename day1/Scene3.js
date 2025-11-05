const Scene3 = (char1, char2, char3, char4, char5) => {
  const heading = "Scene 3: The Royal Decision";
  const str = `${char1}, ${char2}, and ${char3} return to the royal palace to meet ${char4}. There, ${char4} announces that ${char2} must marry ${char5} to strengthen the kingdom’s alliance. However, ${char2} bravely refuses, choosing love and loyalty toward ${char1} over royal command.`;

  return `${heading}\n${str}`;
};

export default Scene3;
