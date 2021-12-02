<?php
/**
 * @file
 * Contains Drupal\weather\Form\WeatherKey.
 */
namespace Drupal\weather\Form;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

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
      '#type' => 'textarea',
      '#title' => $this->t('Weather key (from api.openweathermap.org)'),
      '#description' => $this->t('For weather block'),
      '#default_value' => $config->get('weather_key'),
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

}
