# Batalha POO TypeScript

Este é um jogo de batalha desenvolvido em TypeScript que demonstra conceitos de Programação Orientada a Objetos (POO). O jogo simula batalhas entre diferentes tipos de personagens em um ambiente de fantasia.

## Características do Jogo

- **Sistema de Batalha por Turnos**: Os personagens se enfrentam em rodadas, onde são escolhidos aleatoriamente para atacar.
- **Classes de Personagens**: 
  - **Warrior**: Guerreiros com alto poder de ataque físico e vida
  - **Priest**: Sacerdotes com poder de converter outros personagens

### Atributos dos Personagens

#### Warrior
- Força: 1-1000 (gerado aleatoriamente)
- Poder de Ataque: Força × 10
- Resistência: 0-90%
- Esquiva: 0-50%
- Vida Máxima: 40000
- Vida Inicial: 1-40000 (gerado aleatoriamente)
- Habilidades:
  - Ataque físico
  - Contra-ataque
  - Regeneração de 5% da vida
  - Aprimoramento da força (aumenta 10%)

#### Priest
- Vida Máxima: 8000
- Vida Inicial: 1-4000 (gerado aleatoriamente)
- Habilidades:
  - Tentativa de conversão (40% de chance)
  - Regeneração de 10% da vida

## Sistema de Combate

1. A cada rodada, dois personagens são escolhidos aleatoriamente para batalhar
2. O atacante realiza sua ação:
   - Warriors causam dano físico
   - Priests tentam converter o oponente
3. Se o defensor for um Warrior e sobreviver, ele realiza um contra-ataque
4. Personagens podem se esquivar de ataques
5. O dano é reduzido pela resistência do defensor
6. A batalha continua até restar apenas um personagem

## Estatísticas do Jogo

Ao final da batalha, são exibidas estatísticas detalhadas de cada personagem, incluindo:
- Vida inicial
- Número de ataques realizados
- Tentativas de conversão (para Priests)
- Número de eliminações
- Rodadas que permaneceu vivo

## Como Executar

1. Certifique-se de ter o Node.js e o TypeScript instalados
2. Instale as dependências:
```bash
npm install
```
3. Execute o jogo:
```bash
npx ts-node Main.ts
```

## Dependências

- TypeScript
- prompt-sync
- readline-sync
- ts-node

## Contribuídores

<a href="https://github.com/DevRossO"><img src="https://github.com/DevRossO.png" width="45" height="45"></a> &nbsp;