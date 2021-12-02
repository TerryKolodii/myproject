<?php

namespace Drupal\current_year\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'CurrentYear' Block.
 *
 * @Block(
 *   id = "current_year_block",
 *   admin_label = @Translation("Current Year Block"),
 *   category = @Translation("Current Year"),
 * )
 */
class CurrentYearBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $startYear = 2021;
    $currentYear = date('Y');
    if ($currentYear == $startYear) {
      return [
        '#markup' => $this->t('Copyright  @currentYear', ['@currentYear' => $currentYear])
      ];
    } else {
      return [
        '#markup' => $this->t('Copyright @startYear - @currentYear',
          ['@startYear' => $startYear, '@currentYear' => $currentYear])
      ];
    }
  }
}
