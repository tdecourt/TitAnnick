<?php

namespace App\Controller;

use App\Repository\BateauRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use FOS\RestBundle\Controller\Annotations as REST;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Request;

class BateauController extends AbstractController
{
    /**
     * @Rest\View()
     * @Rest\Get(
     *      "/api/bateaux/{id}",
     *      name="detailBateau"
     * )
     */
    public function detailBateau(
        Request $request,
        BateauRepository $repo
    )
    {
        $bateau = $repo->find($request->get('id'));
        return $bateau;
    }

    /**
     * @Rest\View(serializerGroups={"listeBateaux"})
     * @Rest\Get(
     *      "/api/bateaux",
     *      name="listeBateau"
     * )
     */
    public function listeBateau(
        BateauRepository $repo
    )
    {
        $bateau = $repo->findAll();
        return $bateau;
    }
}
