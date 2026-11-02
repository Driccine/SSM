# SSM — architecture cible

## Modules
- **Control UI** : Qt 6, panneau média, layers, cues et mapping.
- **Render Engine** : C++ / Vulkan, décodage hardware et compositing.
- **Output Manager** : GPUs, écrans, résolutions, fréquence et identification.
- **Video Mapper** : surfaces, warping, masques, edge blending.
- **LED Mapper** : patch de pixels, fixtures, Art-Net / sACN.
- **Media Cache** : manifestes, empreintes SHA-256, réplication vers SSD locaux.
- **Cluster Control** : gRPC, commandes horodatées et supervision.
- **Timing** : PTP si disponible ; frame lock/genlock matériel requis pour garanties de sortie frame-accurate.

Le code navigateur v0.1 est uniquement un prototype d'interface. Aucun protocole d'émission réel n'est encore disponible.
