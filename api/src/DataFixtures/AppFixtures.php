<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Musee;
use DateTime;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
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
        $musee->setOuvertures($ouvertures);
        $musee->setFermetures($fermetures);
        $manager->persist($musee);

        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
