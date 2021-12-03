<?php
/**
 * @file
 * Contains Drupal\weather\Form\WeatherKey.
 */
namespace Drupal\weather\Form;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\HttpFoundation;

class WeatherKey extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'weather.adminsettings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'weather_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('weather.adminsettings');
    $form['weather_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Weather key (from api.openweathermap.org)'),
      '#description' => $this->t('For weather block'),
      '#default_value' => $config->get('weather_key'),
      '#minlength' => 32,
      '#required' => TRUE,
    ];

    $form['weather_city'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Weather city'),
      '#description' => $this->t('For weather block'),
      '#default_value' => $config->get('weather_city'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('weather.adminsettings')
      ->set('weather_key', $form_state->getValue('weather_key'))
      ->save();

    $this->config('weather.adminsettings')
      ->set('weather_city', $form_state->getValue('weather_city'))
      ->save();
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $city = $form_state->getValue('weather_city');
    $key = $form_state->getValue('weather_key');
    if (strlen($key) != 32) {
      $form_state
        ->setErrorByName('weather_key', $this
          ->t('The key must be 32 characters long.'));
    } else {
      try {
        $url = "api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=$key";
        $client = new Client();
        $request = $client->get($url);
        $result = json_decode($request->getBody(), TRUE);
        if ($result['cod'] != 200) {
          $form_state
            ->setErrorByName('weather_key', $this
              ->t('Invalid API-key'));
        }
      } catch (RequestException $e) {
        $form_state->setErrorByName('weather_key', $this->t('Cannot access API server'));
      }
    };
    if (empty($city)) {
      $form_state
        ->setErrorByName('weather_city', $this
          ->t('Field is empty'));
    } elseif (preg_match('~[0-9]+~', $city)) {
      $form_state
        ->setErrorByName('weather_city', $this
          ->t('Incorrect value. City name must not contain any numbers or special symbols'));
    }

  }

}
