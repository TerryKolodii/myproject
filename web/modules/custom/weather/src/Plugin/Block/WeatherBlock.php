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

//  public function build() {
//    $client = \Drupal::httpClient();
//    $userIp = \Drupal::request()->getClientIp();
//    $city = json_decode($client->get("ip-api.com/json/$userIp")->getBody()->getContents())->city ?? 'Lutsk';
//    $config = \Drupal::config('weather.adminsettings');
//    $key = $config->get('weather_key');
//    $result = json_decode($client->get("api.openweathermap.org/data/2.5/weather?q=$city&appid=$key&units=metric")
//      ->getBody()->getContents(), TRUE);
//    return [
//      '#markup' => $this->t('@city, @tempMin° - @tempMax°',
//        [
//          '@city' => $result['name'],
//          '@tempMin' => round($result['main']['temp_min']),
//          '@tempMax' => round($result['main']['temp_max']),
//        ]),
//    ];
//  }

  /**
   * {@inheritdoc}
   */

  public function getWeatherByIp() {
    $client = \Drupal::httpClient();
    $userIp = \Drupal::request()->getClientIp();
    $config = \Drupal::config('weather.adminsettings');
    $city = json_decode($client->get("ip-api.com/json/$userIp")->getBody()->getContents())->city ?? $config->get('weather_city');
    $key = $config->get('weather_key');
    $result = json_decode($client->get("api.openweathermap.org/data/2.5/weather?q=$city&appid=$key&units=metric")
      ->getBody()->getContents(), TRUE);
    return [
      'city' => $result['name'],
      'tempMin' => round($result['main']['temp_min']),
      'tempMax' => round($result['main']['temp_max']),
      'icon' => $result['weather'][0]['icon'],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $data = $this::getWeatherByIp();
    return [
      '#theme' => 'weather',
      '#data' => $data,
    ];
  }

}
