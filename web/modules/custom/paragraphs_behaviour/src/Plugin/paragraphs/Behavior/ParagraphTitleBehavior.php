<?php

namespace Drupal\paragraphs_behaviour\Plugin\paragraphs\Behavior;

use Drupal\Core\Entity\Display\EntityViewDisplayInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\paragraphs\Annotation\ParagraphsBehavior;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\paragraphs\Entity\ParagraphsType;
use Drupal\paragraphs\ParagraphInterface;
use Drupal\paragraphs\ParagraphsBehaviorBase;

/**
 * @ParagraphsBehavior(
 *   id = "paragraphs_behaviour_paragraph_title",
 *   label = @Translation("Paragraph title"),
 *   description = @Translation("Allows to select HTML wrapper for title."),
 *   weight = 0,
 * )
 */
class ParagraphTitleBehavior extends ParagraphsBehaviorBase {

  /**
   * {@inheritdoc}
   */
  public static function isApplicable(ParagraphsType $paragraphs_type) {
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function view(array &$build, Paragraph $paragraph, EntityViewDisplayInterface $display, $view_mode) { }

  /**
   * {@inheritdoc}
   */
  public function buildBehaviorForm(ParagraphInterface $paragraph, array &$form, FormStateInterface $form_state) {
    if ($paragraph->hasField('field_you_may_also_like_title')) {
      $form['title_element'] = [
        '#type' => 'select',
        '#title' => $this->t('Please choose wrapper for title'),
        '#description' => $this->t('Wrapper HTML element'),
        '#options' => $this->getTitleOptions(),
        '#default_value' => $paragraph->getBehaviorSetting($this->getPluginId(), 'title_element', 'h2'),
      ];
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary(Paragraph $paragraph) {
    $title_element = $paragraph->getBehaviorSetting($this->getPluginId(), 'title_element');
    return [$title_element ? $this->t('Title element: @element', ['@element' => $title_element]) : ''];
  }

  /**
   * Return options for heading elements.
   */
  private function getTitleOptions() {
    return [
      'h2' => '<h2>',
      'h3' => '<h3>',
      'h4' => '<h4>',
      'div' => '<div>',
      'span' => '<span>',
    ];
  }

}
