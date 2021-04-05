<?php

namespace App\Entity;

use App\Repository\BateauRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=BateauRepository::class)
 */
class Bateau
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("listeBateaux")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("listeBateaux")
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("listeBateaux")
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $infosGenerale;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $histoire;

    /**
     * @ORM\Column(type="float")
     * @Groups("listeBateaux")
     */
    private $latitude;

    /**
     * @ORM\Column(type="float")
     * @Groups("listeBateaux")
     */
    private $longitude;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getInfosGenerale(): ?string
    {
        return $this->infosGenerale;
    }

    public function setInfosGenerale(string $infosGenerale): self
    {
        $this->infosGenerale = $infosGenerale;

        return $this;
    }

    public function getHistoire(): ?string
    {
        return $this->histoire;
    }

    public function setHistoire(string $histoire): self
    {
        $this->histoire = $histoire;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }
}
