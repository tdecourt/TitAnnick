<?php

namespace App\Controller;

use App\Repository\MuseeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use FOS\RestBundle\Controller\Annotations as REST;
use FOS\RestBundle\View\View;

class MuseeController extends AbstractController
{
    /**
     * @Rest\View()
     * @Rest\Get(
     *      "api/musee",
     *      name="musee"
     * )
     */
    public function musee(
        MuseeRepository $repo
    )
    {
        $musee = $repo->find(1);
        return $musee;
    }
}
