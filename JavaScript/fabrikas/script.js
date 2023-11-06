function sukurtiDarbuotoja(vardas, pavardė, atlyginimas, etatas) {
    return {
      vardas,
      pavardė,
      atlyginimas,
      etatas,
      pakeistiAtlyginima(procentai) {
        const naujasAtlyginimas = this.atlyginimas * ( 1 + procentai / 100);
        return naujasAtlyginimas.toFixed(2); 
      },
      pakeistiEtata(naujasEtatas) {
        const pokytis = ((this.atlyginimas * naujasEtatas) - (this.atlyginimas * this.etatas)).toFixed(2); 
        return pokytis;
      },
    };
  }
  
  
  const darbuotojai = [
    sukurtiDarbuotoja('Jonas', 'Jonaitis', 1000, 0.5),
    sukurtiDarbuotoja('Petras', 'Petraitis', 1200, 1.0),
    sukurtiDarbuotoja('Ona', 'Onaitė', 800, 0.8),
  ];
  

  darbuotojai.forEach((darbuotojas, index) => {
    console.log(`Darbuotojas ${index + 1}: ${darbuotojas.vardas} ${darbuotojas.pavardė}`);
    console.log(`Dabartinis atlyginimas: ${darbuotojas.atlyginimas} EUR`);
    

    const naujasAtlyginimas = darbuotojas.pakeistiAtlyginima(10);
    console.log(`Naujas atlyginimas po pakeitimo: ${naujasAtlyginimas} EUR`);
    
   
    const pokytis = darbuotojas.pakeistiEtata(0.7);
    console.log(`Atlyginimo pokytis po etato pakeitimo: ${pokytis} EUR`);
    console.log('---');
  });
  