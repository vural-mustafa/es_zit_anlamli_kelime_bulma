// script.js
const synonymsDatabase = {
    "mutlu": ["sevinçli", "mesut", "neşeli"],
    "kötü": ["kötülük", "zayıf", "zalim"],
    "az":["azıcık","yetersiz","biraz","noksan"],
    // Diğer kelimeler ve anlamlıları buraya eklenebilir
  };
  
  const antonymsDatabase = {
    "mutlu": ["üzgün", "morali bozuk", "neşesiz"],
    "kötü": ["iyi", "kaliteli", "mükemmel"],
    "az":["çok","yeterli"],
    // Diğer kelimeler ve zıt anlamlıları buraya eklenebilir
  };
  
  const wordInput = document.getElementById("wordInput");
  const findSynonymsButton = document.getElementById("findSynonyms");
  const findAntonymsButton = document.getElementById("findAntonyms");
  const resultDiv = document.getElementById("result");
  
  findSynonymsButton.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase();
    if (synonymsDatabase[word]) {
      resultDiv.textContent = `Eş Anlamlılar: ${synonymsDatabase[word].join(", ")}`;
    } else {
      resultDiv.textContent = "Bu kelimenin eş anlamı bulunamadı.";
    }
  });
  
  findAntonymsButton.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase();
    if (antonymsDatabase[word]) {
      resultDiv.textContent = `Zıt Anlamlılar: ${antonymsDatabase[word].join(", ")}`;
    } else {
      resultDiv.textContent = "Bu kelimenin zıt anlamı bulunamadı.";
    }
  });
  