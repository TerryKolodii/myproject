<?php

namespace Drupal\weather\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\HttpFoundation;

/**
 * Provides a 'Weather' Block.
 *
 * @Block(
 *   id = "weather_block",
 *   admin_label = @Translation("Weather"),
 *   category = @Translation("Weather"),
 * )
 */
class WeatherBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $client = \Drupal::httpClient();
    $userIp = \Drupal::request()->getClientIp();
    if (isset(json_decode($client->get("ip-api.com/json/$userIp")->getBody()->getContents())->city)) {
      $city = json_decode($client->get("ip-api.com/json/$userIp")->getBody()->getContents())->city;
    }
    else {
      $city = 'Lutsk';
    }
    $result = json_decode($client->get("api.openweathermap.org/data/2.5/weather?q=$city&appid=a21e7917df394ddd5f528d92e1a67d8a&units=metric")
      ->getBody()->getContents());
    return [
      '#markup' => $this->t('@city, @tempMin° - @tempMax°',
        [
          '@city' => $result->name,
          '@tempMin' => round($result->main->temp_min),
          '@tempMax' => round($result->main->temp_max),
        ]),
    ];
  }

}
