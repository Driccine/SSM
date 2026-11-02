# SSM — Serveur Média Magnum

Version **0.1.0 — prototype expérimental**. Projet indépendant de minage et trading.

## Objectif
Média serveur pour spectacle : banque médias, calques vidéo, surfaces de mapping, sorties multi-GPU, LED Mapper Art-Net/sACN et cluster de serveurs avec distribution des médias.

## Lancer le prototype
Installer Node.js 20+, puis :

```bash
npm install
npm run start
```

Ouvrir l'URL locale donnée par Vite. Importer des images ou vidéos pour les afficher dans la banque, affecter un clip à un calque et modifier son opacité. La prévisualisation est produite dans un canvas HTML.

## Fonctionnel dans v0.1
- Banque de médias importés localement
- Quatre calques et réglage d'opacité
- Prévisualisation vidéo/image dans le navigateur
- Quatre points de contrôle de surface (mapping affine expérimental)
- Export des réglages du projet en JSON (sans copier les médias)

## Pas encore implémenté
- Détection GPU et sorties physiques indépendantes
- Warping projectif exact, edge blending et masques
- LED mapping Art-Net / sACN
- Synchro entre plusieurs serveurs, transfert automatique de médias, genlock, redondance
- Moteur natif C++ / Qt / Vulkan

**Ne pas utiliser en régie pour un spectacle : aucune garantie temps réel ou frame-sync.**

## Suite
1. Modèle de projet et rendu GPU natif
2. Output Manager avec identification des écrans par GPU
3. Video Mapping, LED Mapper et réseau Art-Net/sACN
4. Sync de médias, contrôle cluster et synchronisation mesurée

Licence à définir avant toute réutilisation externe. Ce dépôt public n'accorde pas, par défaut, de licence de redistribution ou modification.
