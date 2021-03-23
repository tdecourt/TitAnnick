<?php

namespace App\Entity;

use App\Repository\MuseeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MuseeRepository::class)
 */
class Musee
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="array")
     */
    private $ouvertures = [];

    /**
     * @ORM\Column(type="array")
     */
    private $fermetures = [];

    public function getId(): ?int
    {
        return $this->id;
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

    public function getOuvertures(): ?array
    {
        return $this->ouvertures;
    }

    public function setOuvertures(array $ouvertures): self
    {
        $this->ouvertures = $ouvertures;

        return $this;
    }

    public function getFermetures(): ?array
    {
        return $this->fermetures;
    }

    public function setFermetures(array $fermetures): self
    {
        $this->fermetures = $fermetures;

        return $this;
    }
}
