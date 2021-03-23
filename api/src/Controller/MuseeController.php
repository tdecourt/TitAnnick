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
     *      "api/musee/horaireouverture",
     *      name="museeOuverture"
     * )
     */
    public function museeOuverture(
        MuseeRepository $repo
    )
    {
        $musee = $repo->findAll()[0]->getOuvertures();

        $view = View::create($musee);
        $view->setFormat('json');

        return $view;
    }

    /**
     * @Rest\View()
     * @Rest\Get(
     *      "api/musee/horairefermeture",
     *      name="museeFermeture"
     * )
     */
    public function museeFermeture(
        MuseeRepository $repo
    )
    {
        $musee = $repo->findAll()[0]->getFermetures();

        $view = View::create($musee);
        $view->setFormat('json');

        return $view;
    }

    /**
     * @Rest\View()
     * @Rest\Get(
     *      "api/musee/image",
     *      name="museeimage"
     * )
     */
    public function museeimage(
        MuseeRepository $repo
    )
    {
        $musee = $repo->findAll()[0]->getImage();

        $view = View::create($musee);
        $view->setFormat('json');

        return $view;
    }
}
