<?php
/**
 * Created by PhpStorm.
 * User: mikekuykendall
 * Date: 3/11/16
 * Time: 10:26 AM
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


class RockPaperScissorsSpockLizard extends Controller
{
    /**
     * @Route("/")
     */
    public function doIt()
    {
        $templating =$this->container->get('templating');
        $html = $templating->render('/showdown.html.twig');

        return new Response($html);

    }

}