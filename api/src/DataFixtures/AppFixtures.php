<?php

namespace App\DataFixtures;

use App\Entity\Bateau;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Musee;
use DateTime;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // Création Musée
        $musee = new Musee();
        $musee->setImage('url image');
        $ouvertures = [];
        $fermetures = [];
        for ($i=0; $i < 7; $i++) { 
            $d = new DateTime();
            $d = $d->setTime(8, 0);
            array_push($ouvertures, $d);
            $d = $d->setTime(18, 0);
            array_push($fermetures, $d);
        }
        $musee->setOuvertures($ouvertures)
              ->setFermetures($fermetures);
        $manager->persist($musee);

        // Création des bateaux
        $bateaux = [
            'France 1'                      => [0.1, -0.1],
            'Saint Gilles'                  => [0.1, -0.1],
            'TD 6'                          => [0.1, -0.1],
            'Joshua'                        => [0.1, -0.1],
            'Angoumois'                     => [0.1, -0.1],
            'Manuel Joel'                   => [0.1, -0.1],
            'Le Canot Major Du Duperre'     => [0.1, -0.1],
            'Capitaine De Fregate Leveger'  => [0.1, -0.1],
        ];
        foreach ($bateaux as $nom => $coordonnees) {
            $bateau = new Bateau();
            $bateau->setNom($nom)
                    ->setImage('http://localhost:9999/img/bateau/'.strtr($nom, array(' ' => '_')).'.jpg')
                    ->setLatitude($coordonnees[0])
                    ->setLongitude($coordonnees[1])
                    ->setInfosGenerale('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed similique deleniti blanditiis, dicta rerum voluptatem laudantium quo eius reprehenderit consectetur voluptatibus optio dignissimos iusto numquam. Similique veritatis unde sunt.')
                    ->setHistoire('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed similique deleniti blanditiis, dicta rerum voluptatem laudantium quo eius reprehenderit consectetur voluptatibus optio dignissimos iusto numquam. Similique veritatis unde sunt.');
            $manager->persist($bateau);
        }

        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
